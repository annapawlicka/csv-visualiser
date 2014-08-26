(ns csv-visualiser.core
  (:require [om.core :as om  :include-macros true]
            [goog.events :as events]
            [goog.dom.classes :as classes]
            [sablono.core :as html :refer-macros [html]]
            [cljs.reader :as reader])
  (:import [goog.events EventType]))

(enable-console-print!)

(def app-model (atom {:dependencies []
                      :alert {}}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers

(defn log [& s]
  (.log js/console (apply str s)))

(defn by-id [id]
  (.getElementById js/document id))


(defn process-file [file cursor]
  )

(defn handle-file-select [cursor evt]
  (.stopPropagation evt)
  (.preventDefault evt)
  (let [files (.-files (.-dataTransfer evt))]
    (dotimes [i (.-length files)]
      (let [rdr (js/FileReader.)
            the-file (aget files i)]
        (set! (.-onload rdr)
              (fn [e]
                (let [file-content (.-result (.-target e))
                      file-name (if (= ";;; " (.substr file-content 0 4))
                                  (let [idx (.indexOf file-content "\n\n")]
                                    (.log js/console idx)
                                    (.slice file-content 4 idx))
                                  (.-name the-file))]
                  (process-file file-content cursor))))
        (.readAsText rdr the-file)))))

(defn handle-drag-over [evt]
  (.stopPropagation evt)
  (.preventDefault evt)
  (set! (.-dropEffect (.-dataTransfer evt)) "copy"))


(defn set-up-drop-zone [el cursor]
  (.addEventListener el "dragover" handle-drag-over false)
  (.addEventListener el "drop" (partial handle-file-select cursor) false)
  (.addEventListener js/window "dragover" (fn [e] (.stopPropagation e)
                                            (.preventDefault e)))
  (.addEventListener js/window "drop" (fn [e] (.stopPropagation e)
                                        (.preventDefault e))))

(defn drop-zone [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (set-up-drop-zone (by-id "drop-zone") cursor))
    om/IRender
    (render [_]
      (html
       [:p "Drop your project.clj here"]))))

;; FIXME doesn't work without --disable-web-security in chrome
;; clojars are either not setting cross domain headers or PEBKAC.
(defn dependencies-list [cursor owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        [:div.well.well-lg
         [:table.table
          [:thead
           [:tr
            [:th "Name"] [:th "Version"] [:th "Status"] [:th "Newer versions"]]]
          [:tbody
           (for [dependency (:dependencies cursor)]
             (let [{:keys [name version status]} dependency
                   {:keys [label latest]} status]
               [:tr
                [:td (str name)]
                [:td (str version)]
                [:td label]
                [:td (interpose ", " latest)]]))]]]]))))

(defn is-it-time-view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        [:div.class.page-header
         [:h1 "See my CSV"]]
        (if-not (seq (:dependencies cursor))
          [:div {:id "drop-zone"}
           [:div.well.well-lg
            (om/build drop-zone cursor)]]
          [:div
           (om/build dependencies-list cursor)])]))))

(om/root is-it-time-view app-model
         {:target (.getElementById js/document "app")})
