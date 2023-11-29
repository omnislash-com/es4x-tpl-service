/// <reference types="es4x" />
// @ts-check
import { CoreContext } from 'project-core/src/CoreContext';
import { MainService } from './src/MainService';

// determine the path to the config folder
let	configFolder = process.cwd() + "/config/";
let	modelFolder = process.cwd() + "/src/model/";	

// create the service
let	service = new MainService();
let	appContext = new CoreContext(vertx, process.env.NODE_ENV, false);

// init it
MainService.StartServer(vertx, service, appContext, configFolder, modelFolder);
