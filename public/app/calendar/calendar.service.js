(function(){
  "use strict"
  angular
    .module('user')
    .factory('UserCalendarService',function($http,$routeParams){
      var dateUrl = "https://tiny-tiny.herokuapp.com/collections/dates";
      var parseItem = function(item){
        var object = {
          _id: item._id,
          start: new Date(item.start),
          end: new Date(item.end),
          title: item.title,
          email:{
            bool:item.email.bool,
            time: item.email.time
          },
          text:{
            bool:item.text.bool,
            time: item.text.time
          },
          notification:{
            bool:item.notification.bool,
            time:item.notification.time,
          }
        }
        return object;
      }
      var getDates = function(item){
        return $http.get(dateUrl);
      };
      var addDate = function(item){
        var pObject = parseItem(item);
        return $http.post(dateUrl,pObject)
      };
      var editDate = function(item){
        return $http.put(dateUrl+'/'+item._id,item)
      }

      var deleteDate = function(item){
        var pObject = parseItem(item);
        return $http.delete(dateUrl +'/' + pObject._id);
      };


    return{
      getDates:getDates,
      addDate:addDate,
      editDate:editDate,
      deleteDate:deleteDate
    };
  });
})();
