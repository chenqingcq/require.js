/**
 * Created by chenqing on 17.6.7.
 */
charset:'UTF-8';
require.config({
    baseUrl:"app/",
});
require(['../lib/jquery-2.1.4','../js/teacherList','../js/courseTime','../js/course'],function(x,a,courseTime,course){
    console.log(x);
    var teacherListBtn = document.querySelector('#teacherList');
    teacherListBtn.onclick = function(){
        a();
    }
    var courseTimeBtn = document.querySelector('#courseTime');
    courseTimeBtn.onclick = function(){
        courseTime();
    }
    var courseBtn = document.querySelector('#course');
    courseBtn.onclick = function (){
        course();
    }
});