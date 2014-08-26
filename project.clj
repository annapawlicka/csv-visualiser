(defproject csv-visualiser "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [om "0.7.1"]
                 [sablono "0.2.20"]
                 [testdouble/clojurescript.csv "0.1.1"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "csv-visualiser"
              :source-paths ["src"]
              :compiler {
                :output-to "csv_visualiser.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
