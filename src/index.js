import { run } from "./app/app.js"
import { AlertService } from "./app/alerts.service.js"
import { Component } from "./app/components.service.js"

const alertService = new AlertService();
const component = new Component();
console.log( "This is the entry point of the application" );
run( alertService, component )