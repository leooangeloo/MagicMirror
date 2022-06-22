/**
 * Author: Leo Angelo Genota
 * Date: 06/22/2022
 * Module: SalesCounter - uses Etsy API and interface to implement a counter for the amount of sales
 * This is the main module script for a custom SalesCounter Module
 */

Module.register("MMM-SalesCounter", {
    defaults: {
        foo: ""
    },
    start: function (){
        this.count = 0
        var timer = setInterval(()=>{
            this.updateDom()
            this.count++
        }, 1000)
    },
    getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "" + this.config.foo
        var subElement = document.createElement("p")
        subElement.innerHTML = "" + this.count
        subElement.id = "COUNT"
        element.appendChild(subElement)
        return element
    },
    notificationReceived: function(notification, payload, sender) {
        switch(notification) {
            case "DOM_OBJECTS_CREATED":
            var timer = setInterval(()=>{
                this.updateDom()
                this.count++
            }, 1000)
            break
        }
    },
    socketNotificationReceived: function() {}
});