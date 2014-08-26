(ns csv-visualiser.core
  (:require [om.core :as om  :include-macros true]
            [goog.events :as events]
            [goog.dom.classes :as classes]
            [sablono.core :as html :refer-macros [html]]
            [cljs.reader :as reader]
            [clojure.string :as string])
  (:import [goog.events EventType]))

(enable-console-print!)

(def app-model (atom {:contents []
                      :alert {}}))

(defn log [& s]
  (.log js/console (apply str s)))

(defn by-id [id]
  (.getElementById js/document id))


(defn process-file [file cursor]
 (let [datas (map #(string/split % ",") (string/split file "\n"))]
   (om/update! cursor :contents datas)))

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
       [:p "Drop your CSV here"]))))

(defn csv-contents-table [cursor owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        [:div.well.well-lg
         [:table.table.table-striped.table-hover
          [:thead
           [:tr
            (for [c (first (:contents cursor))]
              [:th c])]]
          [:tbody
           (for [r (rest (:contents cursor))]
              [:tr (for [d r]
              [:td d])])
           ]]]]))))

(defn see-my-csv [cursor owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        [:div.class.page-header
         [:h1 "See my CSV" [:button {:type "button"
                                     :class "btn btn-warning pull-right"
                                     :on-click (fn [e] (om/update! cursor :contents (apply map list (:contents @cursor))))} "Transpose!"]]]
        (if-not (seq (:contents cursor))
          [:div {:id "drop-zone"}
           [:div.well.well-lg
            (om/build drop-zone cursor)]]
          [:div
           (om/build csv-contents-table cursor)])]))))

(om/root see-my-csv app-model
         {:target (.getElementById js/document "app")})
