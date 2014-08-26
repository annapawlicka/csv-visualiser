// Compiled by ClojureScript 0.0-2311
goog.provide('csv_visualiser.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
csv_visualiser.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"alert","alert",-571950580),cljs.core.PersistentArrayMap.EMPTY], null));
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
log.cljs$lang$applyTo = (function (arglist__6586){
var s = cljs.core.seq(arglist__6586);
return log__delegate(s);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
csv_visualiser.core.by_id = (function by_id(id){return document.getElementById(id);
});
csv_visualiser.core.process_file = (function process_file(file,cursor){return null;
});
csv_visualiser.core.handle_file_select = (function handle_file_select(cursor,evt){evt.stopPropagation();
evt.preventDefault();
var files = evt.dataTransfer.files;var n__4409__auto__ = files.length;var i = (0);while(true){
if((i < n__4409__auto__))
{var rdr_6587 = (new FileReader());var the_file_6588 = (files[i]);rdr_6587.onload = ((function (i,rdr_6587,the_file_6588,n__4409__auto__,files){
return (function (e){var file_content = e.target.result;var file_name = ((cljs.core._EQ_.call(null,";;; ",file_content.substr((0),(4))))?(function (){var idx = file_content.indexOf("\n\n");console.log(idx);
return file_content.slice((4),idx);
})():the_file_6588.name);return csv_visualiser.core.process_file.call(null,file_content,cursor);
});})(i,rdr_6587,the_file_6588,n__4409__auto__,files))
;
rdr_6587.readAsText(the_file_6588);
{
var G__6589 = (i + (1));
i = G__6589;
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
csv_visualiser.core.drop_zone = (function drop_zone(cursor,owner){if(typeof csv_visualiser.core.t6595 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t6595 = (function (owner,cursor,drop_zone,meta6596){
this.owner = owner;
this.cursor = cursor;
this.drop_zone = drop_zone;
this.meta6596 = meta6596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t6595.cljs$lang$type = true;
csv_visualiser.core.t6595.cljs$lang$ctorStr = "csv-visualiser.core/t6595";
csv_visualiser.core.t6595.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t6595");
});
csv_visualiser.core.t6595.prototype.om$core$IRender$ = true;
csv_visualiser.core.t6595.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.p(null,"Drop your project.clj here");
});
csv_visualiser.core.t6595.prototype.om$core$IDidMount$ = true;
csv_visualiser.core.t6595.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return csv_visualiser.core.set_up_drop_zone.call(null,csv_visualiser.core.by_id.call(null,"drop-zone"),self__.cursor);
});
csv_visualiser.core.t6595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6597){var self__ = this;
var _6597__$1 = this;return self__.meta6596;
});
csv_visualiser.core.t6595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6597,meta6596__$1){var self__ = this;
var _6597__$1 = this;return (new csv_visualiser.core.t6595(self__.owner,self__.cursor,self__.drop_zone,meta6596__$1));
});
csv_visualiser.core.__GT_t6595 = (function __GT_t6595(owner__$1,cursor__$1,drop_zone__$1,meta6596){return (new csv_visualiser.core.t6595(owner__$1,cursor__$1,drop_zone__$1,meta6596));
});
}
return (new csv_visualiser.core.t6595(owner,cursor,drop_zone,null));
});
csv_visualiser.core.dependencies_list = (function dependencies_list(cursor,owner){if(typeof csv_visualiser.core.t6617 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t6617 = (function (owner,cursor,dependencies_list,meta6618){
this.owner = owner;
this.cursor = cursor;
this.dependencies_list = dependencies_list;
this.meta6618 = meta6618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t6617.cljs$lang$type = true;
csv_visualiser.core.t6617.cljs$lang$ctorStr = "csv-visualiser.core/t6617";
csv_visualiser.core.t6617.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t6617");
});
csv_visualiser.core.t6617.prototype.om$core$IRender$ = true;
csv_visualiser.core.t6617.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "well well-lg"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Version"),React.DOM.th(null,"Status"),React.DOM.th(null,"Newer versions"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4278__auto__ = ((function (___$1){
return (function iter__6622(s__6623){return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){var s__6623__$1 = s__6623;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6623__$1);if(temp__4126__auto__)
{var s__6623__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6623__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__6623__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__6625 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__6624 = (0);while(true){
if((i__6624 < size__4277__auto__))
{var dependency = cljs.core._nth.call(null,c__4276__auto__,i__6624);cljs.core.chunk_append.call(null,b__6625,sablono.interpreter.interpret.call(null,(function (){var map__6630 = dependency;var map__6630__$1 = ((cljs.core.seq_QMARK_.call(null,map__6630))?cljs.core.apply.call(null,cljs.core.hash_map,map__6630):map__6630);var status = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var version = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"version","version",425292698));var name = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__6631 = status;var map__6631__$1 = ((cljs.core.seq_QMARK_.call(null,map__6631))?cljs.core.apply.call(null,cljs.core.hash_map,map__6631):map__6631);var latest = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"latest","latest",24323665));var label = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"label","label",1718410804));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(version))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.interpose.call(null,", ",latest)], null)], null);
})()));
{
var G__6634 = (i__6624 + (1));
i__6624 = G__6634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6625),iter__6622.call(null,cljs.core.chunk_rest.call(null,s__6623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6625),null);
}
} else
{var dependency = cljs.core.first.call(null,s__6623__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var map__6632 = dependency;var map__6632__$1 = ((cljs.core.seq_QMARK_.call(null,map__6632))?cljs.core.apply.call(null,cljs.core.hash_map,map__6632):map__6632);var status = cljs.core.get.call(null,map__6632__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var version = cljs.core.get.call(null,map__6632__$1,new cljs.core.Keyword(null,"version","version",425292698));var name = cljs.core.get.call(null,map__6632__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__6633 = status;var map__6633__$1 = ((cljs.core.seq_QMARK_.call(null,map__6633))?cljs.core.apply.call(null,cljs.core.hash_map,map__6633):map__6633);var latest = cljs.core.get.call(null,map__6633__$1,new cljs.core.Keyword(null,"latest","latest",24323665));var label = cljs.core.get.call(null,map__6633__$1,new cljs.core.Keyword(null,"label","label",1718410804));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(version))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.interpose.call(null,", ",latest)], null)], null);
})()),iter__6622.call(null,cljs.core.rest.call(null,s__6623__$2)));
}
} else
{return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;return iter__4278__auto__.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(self__.cursor));
})())))));
});
csv_visualiser.core.t6617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6619){var self__ = this;
var _6619__$1 = this;return self__.meta6618;
});
csv_visualiser.core.t6617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6619,meta6618__$1){var self__ = this;
var _6619__$1 = this;return (new csv_visualiser.core.t6617(self__.owner,self__.cursor,self__.dependencies_list,meta6618__$1));
});
csv_visualiser.core.__GT_t6617 = (function __GT_t6617(owner__$1,cursor__$1,dependencies_list__$1,meta6618){return (new csv_visualiser.core.t6617(owner__$1,cursor__$1,dependencies_list__$1,meta6618));
});
}
return (new csv_visualiser.core.t6617(owner,cursor,dependencies_list,null));
});
csv_visualiser.core.is_it_time_view = (function is_it_time_view(cursor,owner){if(typeof csv_visualiser.core.t6640 !== 'undefined')
{} else
{
/**
* @constructor
*/
csv_visualiser.core.t6640 = (function (owner,cursor,is_it_time_view,meta6641){
this.owner = owner;
this.cursor = cursor;
this.is_it_time_view = is_it_time_view;
this.meta6641 = meta6641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
csv_visualiser.core.t6640.cljs$lang$type = true;
csv_visualiser.core.t6640.cljs$lang$ctorStr = "csv-visualiser.core/t6640";
csv_visualiser.core.t6640.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"csv-visualiser.core/t6640");
});
csv_visualiser.core.t6640.prototype.om$core$IRender$ = true;
csv_visualiser.core.t6640.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "class page-header"},React.DOM.h1(null,"See my CSV")),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(self__.cursor))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-lg","div.well.well-lg",-202550770),om.core.build.call(null,csv_visualiser.core.drop_zone,self__.cursor)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),om.core.build.call(null,csv_visualiser.core.dependencies_list,self__.cursor)], null))));
});
csv_visualiser.core.t6640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6642){var self__ = this;
var _6642__$1 = this;return self__.meta6641;
});
csv_visualiser.core.t6640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6642,meta6641__$1){var self__ = this;
var _6642__$1 = this;return (new csv_visualiser.core.t6640(self__.owner,self__.cursor,self__.is_it_time_view,meta6641__$1));
});
csv_visualiser.core.__GT_t6640 = (function __GT_t6640(owner__$1,cursor__$1,is_it_time_view__$1,meta6641){return (new csv_visualiser.core.t6640(owner__$1,cursor__$1,is_it_time_view__$1,meta6641));
});
}
return (new csv_visualiser.core.t6640(owner,cursor,is_it_time_view,null));
});
om.core.root.call(null,csv_visualiser.core.is_it_time_view,csv_visualiser.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map