// Compiled by ClojureScript 0.0-2311
goog.provide('csv_visualiser.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
csv_visualiser.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"alert","alert",-571950580),cljs.core.PersistentArrayMap.EMPTY], null));
/**
* @param {...*} var_args
*/
csv_visualiser.core.log = (function() { 
var log__delegate = function (s){return console.log(cljs.core.apply.call(null,cljs.core.str,s));
};
var log = function (var_args){
var s = null;if (arguments.length > 0) {
  s = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,s);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10898){
var s = cljs.core.seq(arglist__10898);
return log__delegate(s);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
csv_visualiser.core.by_id = (function by_id(id){return document.getElementById(id);
});
csv_visualiser.core.process_file = (function process_file(file,cursor){var datas = cljs.core.map.call(null,(function (p1__10899_SHARP_){return clojure.string.split.call(null,p1__10899_SHARP_,",");
}),clojure.string.split.call(null,file,"\n"));return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"contents","contents",-1567174023),datas);
});
csv_visualiser.core.handle_file_select = (function handle_file_select(cursor,evt){evt.stopPropagation();
evt.preventDefault();
var files = evt.dataTransfer.files;var n__4409__auto__ = files.length;var i = (0);while(true){
if((i < n__4409__auto__))
{var rdr_10900 = (new FileReader());var the_file_10901 = (files[i]);rdr_10900.onload = ((function (i,rdr_10900,the_file_10901,n__4409__auto__,files){
return (function (e){var file_content = e.target.result;var file_name = ((cljs.core._EQ_.call(null,";;; ",file_content.substr((0),(4))))?(function (){var idx = file_content.indexOf("\n\n");console.log(idx);
return file_content.slice((4),idx);
})():the_file_10901.name);return csv_visualiser.core.process_file.call(null,file_content,cursor);
});})(i,rdr_10900,the_file_10901,n__4409__auto__,files))
;
rdr_10900.readAsText(the_file_10901);
{
var G__10902 = (i + (1));
i = G__10902;
continue;
}
} else
{return null;
}
break;
}
});
csv_visualiser.core.handle_drag_over = (function handle_drag_over(evt){evt.stopPropagation();
evt.preventDefault();
return evt.dataTransfer.dropEffect = "copy";
});
csv_visualiser.core.set_up_drop_zone = (function set_up_drop_zone(el,cursor){el.addEventListener("dragover",csv_visualiser.core.handle_drag_over,false);
el.addEventListener("drop",cljs.core.partial.call(null,csv_visualiser.core.handle_file_select,cursor),false);
window.addEventListener("dragover",(function (e){e.stopPropagation();
return e.preventDefault();
}));
return window.addEventListener("drop",(function (e){e.stopPropagation();
return e.preventDefault();
}));
});
csv_visualiser.core.drop_zone = (function drop_zone(cursor,owner){if(typeof csv_visualiser.core.t10908 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t10908 = (function (owner,cursor,drop_zone,meta10909){
this.owner = owner;
this.cursor = cursor;
this.drop_zone = drop_zone;
this.meta10909 = meta10909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t10908.cljs$lang$type = true;
csv_visualiser.core.t10908.cljs$lang$ctorStr = "csv-visualiser.core/t10908";
csv_visualiser.core.t10908.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t10908");
});
csv_visualiser.core.t10908.prototype.om$core$IRender$ = true;
csv_visualiser.core.t10908.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.p(null,"Drop your CSV here");
});
csv_visualiser.core.t10908.prototype.om$core$IDidMount$ = true;
csv_visualiser.core.t10908.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return csv_visualiser.core.set_up_drop_zone.call(null,csv_visualiser.core.by_id.call(null,"drop-zone"),self__.cursor);
});
csv_visualiser.core.t10908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10910){var self__ = this;
var _10910__$1 = this;return self__.meta10909;
});
csv_visualiser.core.t10908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10910,meta10909__$1){var self__ = this;
var _10910__$1 = this;return (new csv_visualiser.core.t10908(self__.owner,self__.cursor,self__.drop_zone,meta10909__$1));
});
csv_visualiser.core.__GT_t10908 = (function __GT_t10908(owner__$1,cursor__$1,drop_zone__$1,meta10909){return (new csv_visualiser.core.t10908(owner__$1,cursor__$1,drop_zone__$1,meta10909));
});
}
return (new csv_visualiser.core.t10908(owner,cursor,drop_zone,null));
});
csv_visualiser.core.csv_contents_table = (function csv_contents_table(cursor,owner){if(typeof csv_visualiser.core.t10942 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t10942 = (function (owner,cursor,csv_contents_table,meta10943){
this.owner = owner;
this.cursor = cursor;
this.csv_contents_table = csv_contents_table;
this.meta10943 = meta10943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t10942.cljs$lang$type = true;
csv_visualiser.core.t10942.cljs$lang$ctorStr = "csv-visualiser.core/t10942";
csv_visualiser.core.t10942.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t10942");
});
csv_visualiser.core.t10942.prototype.om$core$IRender$ = true;
csv_visualiser.core.t10942.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "well well-lg"},React.DOM.table({"className": "table table-striped table-hover"},React.DOM.thead(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4278__auto__ = ((function (___$1){
return (function iter__10947(s__10948){return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){var s__10948__$1 = s__10948;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10948__$1);if(temp__4126__auto__)
{var s__10948__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10948__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__10948__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__10950 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__10949 = (0);while(true){
if((i__10949 < size__4277__auto__))
{var c = cljs.core._nth.call(null,c__4276__auto__,i__10949);cljs.core.chunk_append.call(null,b__10950,(function (){var attrs10945 = c;return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs10945))?sablono.interpreter.attributes.call(null,attrs10945):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10945)], null))));
})());
{
var G__10971 = (i__10949 + (1));
i__10949 = G__10971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10950),iter__10947.call(null,cljs.core.chunk_rest.call(null,s__10948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10950),null);
}
} else
{var c = cljs.core.first.call(null,s__10948__$2);return cljs.core.cons.call(null,(function (){var attrs10945 = c;return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs10945))?sablono.interpreter.attributes.call(null,attrs10945):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10945)], null))));
})(),iter__10947.call(null,cljs.core.rest.call(null,s__10948__$2)));
}
} else
{return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;return iter__4278__auto__.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
})()))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4278__auto__ = ((function (___$1){
return (function iter__10951(s__10952){return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){var s__10952__$1 = s__10952;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10952__$1);if(temp__4126__auto__)
{var s__10952__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10952__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__10952__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__10954 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__10953 = (0);while(true){
if((i__10953 < size__4277__auto__))
{var r = cljs.core._nth.call(null,c__4276__auto__,i__10953);cljs.core.chunk_append.call(null,b__10954,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4278__auto__ = ((function (i__10953,r,c__4276__auto__,size__4277__auto__,b__10954,s__10952__$2,temp__4126__auto__,___$1){
return (function iter__10963(s__10964){return (new cljs.core.LazySeq(null,((function (i__10953,r,c__4276__auto__,size__4277__auto__,b__10954,s__10952__$2,temp__4126__auto__,___$1){
return (function (){var s__10964__$1 = s__10964;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10964__$1);if(temp__4126__auto____$1)
{var s__10964__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10964__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__10964__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__10966 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__10965 = (0);while(true){
if((i__10965 < size__4277__auto____$1))
{var d = cljs.core._nth.call(null,c__4276__auto____$1,i__10965);cljs.core.chunk_append.call(null,b__10966,(function (){var attrs10946 = d;return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10946))?sablono.interpreter.attributes.call(null,attrs10946):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10946)], null))));
})());
{
var G__10972 = (i__10965 + (1));
i__10965 = G__10972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10966),iter__10963.call(null,cljs.core.chunk_rest.call(null,s__10964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10966),null);
}
} else
{var d = cljs.core.first.call(null,s__10964__$2);return cljs.core.cons.call(null,(function (){var attrs10946 = d;return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10946))?sablono.interpreter.attributes.call(null,attrs10946):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10946)], null))));
})(),iter__10963.call(null,cljs.core.rest.call(null,s__10964__$2)));
}
} else
{return null;
}
break;
}
});})(i__10953,r,c__4276__auto__,size__4277__auto__,b__10954,s__10952__$2,temp__4126__auto__,___$1))
,null,null));
});})(i__10953,r,c__4276__auto__,size__4277__auto__,b__10954,s__10952__$2,temp__4126__auto__,___$1))
;return iter__4278__auto__.call(null,r);
})())));
{
var G__10973 = (i__10953 + (1));
i__10953 = G__10973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10954),iter__10951.call(null,cljs.core.chunk_rest.call(null,s__10952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10954),null);
}
} else
{var r = cljs.core.first.call(null,s__10952__$2);return cljs.core.cons.call(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4278__auto__ = ((function (r,s__10952__$2,temp__4126__auto__,___$1){
return (function iter__10967(s__10968){return (new cljs.core.LazySeq(null,((function (r,s__10952__$2,temp__4126__auto__,___$1){
return (function (){var s__10968__$1 = s__10968;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10968__$1);if(temp__4126__auto____$1)
{var s__10968__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10968__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__10968__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__10970 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__10969 = (0);while(true){
if((i__10969 < size__4277__auto__))
{var d = cljs.core._nth.call(null,c__4276__auto__,i__10969);cljs.core.chunk_append.call(null,b__10970,(function (){var attrs10946 = d;return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10946))?sablono.interpreter.attributes.call(null,attrs10946):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10946)], null))));
})());
{
var G__10974 = (i__10969 + (1));
i__10969 = G__10974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10970),iter__10967.call(null,cljs.core.chunk_rest.call(null,s__10968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10970),null);
}
} else
{var d = cljs.core.first.call(null,s__10968__$2);return cljs.core.cons.call(null,(function (){var attrs10946 = d;return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10946))?sablono.interpreter.attributes.call(null,attrs10946):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10946)], null))));
})(),iter__10967.call(null,cljs.core.rest.call(null,s__10968__$2)));
}
} else
{return null;
}
break;
}
});})(r,s__10952__$2,temp__4126__auto__,___$1))
,null,null));
});})(r,s__10952__$2,temp__4126__auto__,___$1))
;return iter__4278__auto__.call(null,r);
})())),iter__10951.call(null,cljs.core.rest.call(null,s__10952__$2)));
}
} else
{return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;return iter__4278__auto__.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
})())))));
});
csv_visualiser.core.t10942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10944){var self__ = this;
var _10944__$1 = this;return self__.meta10943;
});
csv_visualiser.core.t10942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10944,meta10943__$1){var self__ = this;
var _10944__$1 = this;return (new csv_visualiser.core.t10942(self__.owner,self__.cursor,self__.csv_contents_table,meta10943__$1));
});
csv_visualiser.core.__GT_t10942 = (function __GT_t10942(owner__$1,cursor__$1,csv_contents_table__$1,meta10943){return (new csv_visualiser.core.t10942(owner__$1,cursor__$1,csv_contents_table__$1,meta10943));
});
}
return (new csv_visualiser.core.t10942(owner,cursor,csv_contents_table,null));
});
csv_visualiser.core.see_my_csv = (function see_my_csv(cursor,owner){if(typeof csv_visualiser.core.t10978 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t10978 = (function (owner,cursor,see_my_csv,meta10979){
this.owner = owner;
this.cursor = cursor;
this.see_my_csv = see_my_csv;
this.meta10979 = meta10979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t10978.cljs$lang$type = true;
csv_visualiser.core.t10978.cljs$lang$ctorStr = "csv-visualiser.core/t10978";
csv_visualiser.core.t10978.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t10978");
});
csv_visualiser.core.t10978.prototype.om$core$IRender$ = true;
csv_visualiser.core.t10978.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "class page-header"},React.DOM.h1(null,"See my CSV",React.DOM.button({"className": "btn btn-warning pull-right", "type": "button", "onClick": ((function (___$1){
return (function (e){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.apply.call(null,cljs.core.map,cljs.core.list,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.cursor))));
});})(___$1))
},"Transpose!"))),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.cursor))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-lg","div.well.well-lg",-202550770),om.core.build.call(null,csv_visualiser.core.drop_zone,self__.cursor)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),om.core.build.call(null,csv_visualiser.core.csv_contents_table,self__.cursor)], null))));
});
csv_visualiser.core.t10978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10980){var self__ = this;
var _10980__$1 = this;return self__.meta10979;
});
csv_visualiser.core.t10978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10980,meta10979__$1){var self__ = this;
var _10980__$1 = this;return (new csv_visualiser.core.t10978(self__.owner,self__.cursor,self__.see_my_csv,meta10979__$1));
});
csv_visualiser.core.__GT_t10978 = (function __GT_t10978(owner__$1,cursor__$1,see_my_csv__$1,meta10979){return (new csv_visualiser.core.t10978(owner__$1,cursor__$1,see_my_csv__$1,meta10979));
});
}
return (new csv_visualiser.core.t10978(owner,cursor,see_my_csv,null));
});
om.core.root.call(null,csv_visualiser.core.see_my_csv,csv_visualiser.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map