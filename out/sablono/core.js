// Compiled by ClojureScript 0.0-2311
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__7849__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__7848 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__7848,(0),null);var body = cljs.core.nthnext.call(null,vec__7848,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__7849 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7849__delegate.call(this,args);};
G__7849.cljs$lang$maxFixedArity = 0;
G__7849.cljs$lang$applyTo = (function (arglist__7850){
var args = cljs.core.seq(arglist__7850);
return G__7849__delegate(args);
});
G__7849.cljs$core$IFn$_invoke$arity$variadic = G__7849__delegate;
return G__7849;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4278__auto__ = (function iter__7855(s__7856){return (new cljs.core.LazySeq(null,(function (){var s__7856__$1 = s__7856;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7856__$1);if(temp__4126__auto__)
{var s__7856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7856__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__7856__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__7858 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__7857 = (0);while(true){
if((i__7857 < size__4277__auto__))
{var args = cljs.core._nth.call(null,c__4276__auto__,i__7857);cljs.core.chunk_append.call(null,b__7858,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__7859 = (i__7857 + (1));
i__7857 = G__7859;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7858),iter__7855.call(null,cljs.core.chunk_rest.call(null,s__7856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7858),null);
}
} else
{var args = cljs.core.first.call(null,s__7856__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__7855.call(null,cljs.core.rest.call(null,s__7856__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4278__auto__ = (function iter__7864(s__7865){return (new cljs.core.LazySeq(null,(function (){var s__7865__$1 = s__7865;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7865__$1);if(temp__4126__auto__)
{var s__7865__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7865__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__7865__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__7867 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__7866 = (0);while(true){
if((i__7866 < size__4277__auto__))
{var style = cljs.core._nth.call(null,c__4276__auto__,i__7866);cljs.core.chunk_append.call(null,b__7867,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__7868 = (i__7866 + (1));
i__7866 = G__7868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7867),iter__7864.call(null,cljs.core.chunk_rest.call(null,s__7865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7867),null);
}
} else
{var style = cljs.core.first.call(null,s__7865__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__7864.call(null,cljs.core.rest.call(null,s__7865__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__7869){
var styles = cljs.core.seq(arglist__7869);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to7870 = (function() { 
var link_to7870__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to7870 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to7870__delegate.call(this,url,content);};
link_to7870.cljs$lang$maxFixedArity = 1;
link_to7870.cljs$lang$applyTo = (function (arglist__7871){
var url = cljs.core.first(arglist__7871);
var content = cljs.core.rest(arglist__7871);
return link_to7870__delegate(url,content);
});
link_to7870.cljs$core$IFn$_invoke$arity$variadic = link_to7870__delegate;
return link_to7870;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to7870);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to7872 = (function() { 
var mail_to7872__delegate = function (e_mail,p__7873){var vec__7875 = p__7873;var content = cljs.core.nth.call(null,vec__7875,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3553__auto__ = content;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to7872 = function (e_mail,var_args){
var p__7873 = null;if (arguments.length > 1) {
  p__7873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to7872__delegate.call(this,e_mail,p__7873);};
mail_to7872.cljs$lang$maxFixedArity = 1;
mail_to7872.cljs$lang$applyTo = (function (arglist__7876){
var e_mail = cljs.core.first(arglist__7876);
var p__7873 = cljs.core.rest(arglist__7876);
return mail_to7872__delegate(e_mail,p__7873);
});
mail_to7872.cljs$core$IFn$_invoke$arity$variadic = mail_to7872__delegate;
return mail_to7872;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to7872);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list7877 = (function unordered_list7877(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4278__auto__ = (function iter__7882(s__7883){return (new cljs.core.LazySeq(null,(function (){var s__7883__$1 = s__7883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7883__$1);if(temp__4126__auto__)
{var s__7883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7883__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__7883__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__7885 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__7884 = (0);while(true){
if((i__7884 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__7884);cljs.core.chunk_append.call(null,b__7885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__7886 = (i__7884 + (1));
i__7884 = G__7886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7885),iter__7882.call(null,cljs.core.chunk_rest.call(null,s__7883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7885),null);
}
} else
{var x = cljs.core.first.call(null,s__7883__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__7882.call(null,cljs.core.rest.call(null,s__7883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list7877);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list7887 = (function ordered_list7887(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4278__auto__ = (function iter__7892(s__7893){return (new cljs.core.LazySeq(null,(function (){var s__7893__$1 = s__7893;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7893__$1);if(temp__4126__auto__)
{var s__7893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7893__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__7893__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__7895 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__7894 = (0);while(true){
if((i__7894 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__7894);cljs.core.chunk_append.call(null,b__7895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__7896 = (i__7894 + (1));
i__7894 = G__7896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7895),iter__7892.call(null,cljs.core.chunk_rest.call(null,s__7893__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7895),null);
}
} else
{var x = cljs.core.first.call(null,s__7893__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__7892.call(null,cljs.core.rest.call(null,s__7893__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list7887);
/**
* Create an image element.
*/
sablono.core.image7897 = (function() {
var image7897 = null;
var image7897__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image7897__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image7897 = function(src,alt){
switch(arguments.length){
case 1:
return image7897__1.call(this,src);
case 2:
return image7897__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image7897.cljs$core$IFn$_invoke$arity$1 = image7897__1;
image7897.cljs$core$IFn$_invoke$arity$2 = image7897__2;
return image7897;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image7897);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__7898_SHARP_,p2__7899_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7898_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7899_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__7900_SHARP_,p2__7901_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7900_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7901_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field7902 = (function() {
var color_field7902 = null;
var color_field7902__1 = (function (name__5028__auto__){return color_field7902.call(null,name__5028__auto__,null);
});
var color_field7902__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5028__auto__,value__5029__auto__);
});
color_field7902 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return color_field7902__1.call(this,name__5028__auto__);
case 2:
return color_field7902__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field7902.cljs$core$IFn$_invoke$arity$1 = color_field7902__1;
color_field7902.cljs$core$IFn$_invoke$arity$2 = color_field7902__2;
return color_field7902;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field7902);
/**
* Creates a date input field.
*/
sablono.core.date_field7903 = (function() {
var date_field7903 = null;
var date_field7903__1 = (function (name__5028__auto__){return date_field7903.call(null,name__5028__auto__,null);
});
var date_field7903__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5028__auto__,value__5029__auto__);
});
date_field7903 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return date_field7903__1.call(this,name__5028__auto__);
case 2:
return date_field7903__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field7903.cljs$core$IFn$_invoke$arity$1 = date_field7903__1;
date_field7903.cljs$core$IFn$_invoke$arity$2 = date_field7903__2;
return date_field7903;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field7903);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field7904 = (function() {
var datetime_field7904 = null;
var datetime_field7904__1 = (function (name__5028__auto__){return datetime_field7904.call(null,name__5028__auto__,null);
});
var datetime_field7904__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5028__auto__,value__5029__auto__);
});
datetime_field7904 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return datetime_field7904__1.call(this,name__5028__auto__);
case 2:
return datetime_field7904__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field7904.cljs$core$IFn$_invoke$arity$1 = datetime_field7904__1;
datetime_field7904.cljs$core$IFn$_invoke$arity$2 = datetime_field7904__2;
return datetime_field7904;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field7904);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field7905 = (function() {
var datetime_local_field7905 = null;
var datetime_local_field7905__1 = (function (name__5028__auto__){return datetime_local_field7905.call(null,name__5028__auto__,null);
});
var datetime_local_field7905__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5028__auto__,value__5029__auto__);
});
datetime_local_field7905 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return datetime_local_field7905__1.call(this,name__5028__auto__);
case 2:
return datetime_local_field7905__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field7905.cljs$core$IFn$_invoke$arity$1 = datetime_local_field7905__1;
datetime_local_field7905.cljs$core$IFn$_invoke$arity$2 = datetime_local_field7905__2;
return datetime_local_field7905;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field7905);
/**
* Creates a email input field.
*/
sablono.core.email_field7906 = (function() {
var email_field7906 = null;
var email_field7906__1 = (function (name__5028__auto__){return email_field7906.call(null,name__5028__auto__,null);
});
var email_field7906__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5028__auto__,value__5029__auto__);
});
email_field7906 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return email_field7906__1.call(this,name__5028__auto__);
case 2:
return email_field7906__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field7906.cljs$core$IFn$_invoke$arity$1 = email_field7906__1;
email_field7906.cljs$core$IFn$_invoke$arity$2 = email_field7906__2;
return email_field7906;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field7906);
/**
* Creates a file input field.
*/
sablono.core.file_field7907 = (function() {
var file_field7907 = null;
var file_field7907__1 = (function (name__5028__auto__){return file_field7907.call(null,name__5028__auto__,null);
});
var file_field7907__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5028__auto__,value__5029__auto__);
});
file_field7907 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return file_field7907__1.call(this,name__5028__auto__);
case 2:
return file_field7907__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field7907.cljs$core$IFn$_invoke$arity$1 = file_field7907__1;
file_field7907.cljs$core$IFn$_invoke$arity$2 = file_field7907__2;
return file_field7907;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field7907);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field7908 = (function() {
var hidden_field7908 = null;
var hidden_field7908__1 = (function (name__5028__auto__){return hidden_field7908.call(null,name__5028__auto__,null);
});
var hidden_field7908__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5028__auto__,value__5029__auto__);
});
hidden_field7908 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return hidden_field7908__1.call(this,name__5028__auto__);
case 2:
return hidden_field7908__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field7908.cljs$core$IFn$_invoke$arity$1 = hidden_field7908__1;
hidden_field7908.cljs$core$IFn$_invoke$arity$2 = hidden_field7908__2;
return hidden_field7908;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field7908);
/**
* Creates a month input field.
*/
sablono.core.month_field7909 = (function() {
var month_field7909 = null;
var month_field7909__1 = (function (name__5028__auto__){return month_field7909.call(null,name__5028__auto__,null);
});
var month_field7909__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5028__auto__,value__5029__auto__);
});
month_field7909 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return month_field7909__1.call(this,name__5028__auto__);
case 2:
return month_field7909__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field7909.cljs$core$IFn$_invoke$arity$1 = month_field7909__1;
month_field7909.cljs$core$IFn$_invoke$arity$2 = month_field7909__2;
return month_field7909;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field7909);
/**
* Creates a number input field.
*/
sablono.core.number_field7910 = (function() {
var number_field7910 = null;
var number_field7910__1 = (function (name__5028__auto__){return number_field7910.call(null,name__5028__auto__,null);
});
var number_field7910__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5028__auto__,value__5029__auto__);
});
number_field7910 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return number_field7910__1.call(this,name__5028__auto__);
case 2:
return number_field7910__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field7910.cljs$core$IFn$_invoke$arity$1 = number_field7910__1;
number_field7910.cljs$core$IFn$_invoke$arity$2 = number_field7910__2;
return number_field7910;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field7910);
/**
* Creates a password input field.
*/
sablono.core.password_field7911 = (function() {
var password_field7911 = null;
var password_field7911__1 = (function (name__5028__auto__){return password_field7911.call(null,name__5028__auto__,null);
});
var password_field7911__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5028__auto__,value__5029__auto__);
});
password_field7911 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return password_field7911__1.call(this,name__5028__auto__);
case 2:
return password_field7911__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field7911.cljs$core$IFn$_invoke$arity$1 = password_field7911__1;
password_field7911.cljs$core$IFn$_invoke$arity$2 = password_field7911__2;
return password_field7911;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field7911);
/**
* Creates a range input field.
*/
sablono.core.range_field7912 = (function() {
var range_field7912 = null;
var range_field7912__1 = (function (name__5028__auto__){return range_field7912.call(null,name__5028__auto__,null);
});
var range_field7912__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5028__auto__,value__5029__auto__);
});
range_field7912 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return range_field7912__1.call(this,name__5028__auto__);
case 2:
return range_field7912__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field7912.cljs$core$IFn$_invoke$arity$1 = range_field7912__1;
range_field7912.cljs$core$IFn$_invoke$arity$2 = range_field7912__2;
return range_field7912;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field7912);
/**
* Creates a search input field.
*/
sablono.core.search_field7913 = (function() {
var search_field7913 = null;
var search_field7913__1 = (function (name__5028__auto__){return search_field7913.call(null,name__5028__auto__,null);
});
var search_field7913__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5028__auto__,value__5029__auto__);
});
search_field7913 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return search_field7913__1.call(this,name__5028__auto__);
case 2:
return search_field7913__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field7913.cljs$core$IFn$_invoke$arity$1 = search_field7913__1;
search_field7913.cljs$core$IFn$_invoke$arity$2 = search_field7913__2;
return search_field7913;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field7913);
/**
* Creates a tel input field.
*/
sablono.core.tel_field7914 = (function() {
var tel_field7914 = null;
var tel_field7914__1 = (function (name__5028__auto__){return tel_field7914.call(null,name__5028__auto__,null);
});
var tel_field7914__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5028__auto__,value__5029__auto__);
});
tel_field7914 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return tel_field7914__1.call(this,name__5028__auto__);
case 2:
return tel_field7914__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field7914.cljs$core$IFn$_invoke$arity$1 = tel_field7914__1;
tel_field7914.cljs$core$IFn$_invoke$arity$2 = tel_field7914__2;
return tel_field7914;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field7914);
/**
* Creates a text input field.
*/
sablono.core.text_field7915 = (function() {
var text_field7915 = null;
var text_field7915__1 = (function (name__5028__auto__){return text_field7915.call(null,name__5028__auto__,null);
});
var text_field7915__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5028__auto__,value__5029__auto__);
});
text_field7915 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return text_field7915__1.call(this,name__5028__auto__);
case 2:
return text_field7915__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field7915.cljs$core$IFn$_invoke$arity$1 = text_field7915__1;
text_field7915.cljs$core$IFn$_invoke$arity$2 = text_field7915__2;
return text_field7915;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field7915);
/**
* Creates a time input field.
*/
sablono.core.time_field7916 = (function() {
var time_field7916 = null;
var time_field7916__1 = (function (name__5028__auto__){return time_field7916.call(null,name__5028__auto__,null);
});
var time_field7916__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5028__auto__,value__5029__auto__);
});
time_field7916 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return time_field7916__1.call(this,name__5028__auto__);
case 2:
return time_field7916__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field7916.cljs$core$IFn$_invoke$arity$1 = time_field7916__1;
time_field7916.cljs$core$IFn$_invoke$arity$2 = time_field7916__2;
return time_field7916;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field7916);
/**
* Creates a url input field.
*/
sablono.core.url_field7917 = (function() {
var url_field7917 = null;
var url_field7917__1 = (function (name__5028__auto__){return url_field7917.call(null,name__5028__auto__,null);
});
var url_field7917__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5028__auto__,value__5029__auto__);
});
url_field7917 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return url_field7917__1.call(this,name__5028__auto__);
case 2:
return url_field7917__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field7917.cljs$core$IFn$_invoke$arity$1 = url_field7917__1;
url_field7917.cljs$core$IFn$_invoke$arity$2 = url_field7917__2;
return url_field7917;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field7917);
/**
* Creates a week input field.
*/
sablono.core.week_field7918 = (function() {
var week_field7918 = null;
var week_field7918__1 = (function (name__5028__auto__){return week_field7918.call(null,name__5028__auto__,null);
});
var week_field7918__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5028__auto__,value__5029__auto__);
});
week_field7918 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return week_field7918__1.call(this,name__5028__auto__);
case 2:
return week_field7918__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field7918.cljs$core$IFn$_invoke$arity$1 = week_field7918__1;
week_field7918.cljs$core$IFn$_invoke$arity$2 = week_field7918__2;
return week_field7918;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field7918);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box7919 = (function() {
var check_box7919 = null;
var check_box7919__1 = (function (name){return check_box7919.call(null,name,null);
});
var check_box7919__2 = (function (name,checked_QMARK_){return check_box7919.call(null,name,checked_QMARK_,"true");
});
var check_box7919__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box7919 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box7919__1.call(this,name);
case 2:
return check_box7919__2.call(this,name,checked_QMARK_);
case 3:
return check_box7919__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box7919.cljs$core$IFn$_invoke$arity$1 = check_box7919__1;
check_box7919.cljs$core$IFn$_invoke$arity$2 = check_box7919__2;
check_box7919.cljs$core$IFn$_invoke$arity$3 = check_box7919__3;
return check_box7919;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box7919);
/**
* Creates a radio button.
*/
sablono.core.radio_button7920 = (function() {
var radio_button7920 = null;
var radio_button7920__1 = (function (group){return radio_button7920.call(null,group,null);
});
var radio_button7920__2 = (function (group,checked_QMARK_){return radio_button7920.call(null,group,checked_QMARK_,"true");
});
var radio_button7920__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button7920 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button7920__1.call(this,group);
case 2:
return radio_button7920__2.call(this,group,checked_QMARK_);
case 3:
return radio_button7920__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button7920.cljs$core$IFn$_invoke$arity$1 = radio_button7920__1;
radio_button7920.cljs$core$IFn$_invoke$arity$2 = radio_button7920__2;
radio_button7920.cljs$core$IFn$_invoke$arity$3 = radio_button7920__3;
return radio_button7920;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button7920);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options7921 = (function() {
var select_options7921 = null;
var select_options7921__1 = (function (coll){return select_options7921.call(null,coll,null);
});
var select_options7921__2 = (function (coll,selected){var iter__4278__auto__ = (function iter__7930(s__7931){return (new cljs.core.LazySeq(null,(function (){var s__7931__$1 = s__7931;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7931__$1);if(temp__4126__auto__)
{var s__7931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7931__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__7931__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__7933 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__7932 = (0);while(true){
if((i__7932 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__7932);cljs.core.chunk_append.call(null,b__7933,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7936 = x;var text = cljs.core.nth.call(null,vec__7936,(0),null);var val = cljs.core.nth.call(null,vec__7936,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__7936,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options7921.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__7938 = (i__7932 + (1));
i__7932 = G__7938;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7933),iter__7930.call(null,cljs.core.chunk_rest.call(null,s__7931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7933),null);
}
} else
{var x = cljs.core.first.call(null,s__7931__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7937 = x;var text = cljs.core.nth.call(null,vec__7937,(0),null);var val = cljs.core.nth.call(null,vec__7937,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__7937,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options7921.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__7930.call(null,cljs.core.rest.call(null,s__7931__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
});
select_options7921 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options7921__1.call(this,coll);
case 2:
return select_options7921__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options7921.cljs$core$IFn$_invoke$arity$1 = select_options7921__1;
select_options7921.cljs$core$IFn$_invoke$arity$2 = select_options7921__2;
return select_options7921;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options7921);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down7939 = (function() {
var drop_down7939 = null;
var drop_down7939__2 = (function (name,options){return drop_down7939.call(null,name,options,null);
});
var drop_down7939__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down7939 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down7939__2.call(this,name,options);
case 3:
return drop_down7939__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down7939.cljs$core$IFn$_invoke$arity$2 = drop_down7939__2;
drop_down7939.cljs$core$IFn$_invoke$arity$3 = drop_down7939__3;
return drop_down7939;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down7939);
/**
* Creates a text area element.
*/
sablono.core.text_area7940 = (function() {
var text_area7940 = null;
var text_area7940__1 = (function (name){return text_area7940.call(null,name,null);
});
var text_area7940__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area7940 = function(name,value){
switch(arguments.length){
case 1:
return text_area7940__1.call(this,name);
case 2:
return text_area7940__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area7940.cljs$core$IFn$_invoke$arity$1 = text_area7940__1;
text_area7940.cljs$core$IFn$_invoke$arity$2 = text_area7940__2;
return text_area7940;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area7940);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label7941 = (function label7941(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label7941);
/**
* Creates a submit button.
*/
sablono.core.submit_button7942 = (function submit_button7942(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button7942);
/**
* Creates a form reset button.
*/
sablono.core.reset_button7943 = (function reset_button7943(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button7943);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to7944 = (function() { 
var form_to7944__delegate = function (p__7945,body){var vec__7947 = p__7945;var method = cljs.core.nth.call(null,vec__7947,(0),null);var action = cljs.core.nth.call(null,vec__7947,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to7944 = function (p__7945,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to7944__delegate.call(this,p__7945,body);};
form_to7944.cljs$lang$maxFixedArity = 1;
form_to7944.cljs$lang$applyTo = (function (arglist__7948){
var p__7945 = cljs.core.first(arglist__7948);
var body = cljs.core.rest(arglist__7948);
return form_to7944__delegate(p__7945,body);
});
form_to7944.cljs$core$IFn$_invoke$arity$variadic = form_to7944__delegate;
return form_to7944;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to7944);

//# sourceMappingURL=core.js.map