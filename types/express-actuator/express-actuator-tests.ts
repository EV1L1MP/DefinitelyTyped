import express = require("express");
import actuator = require("express-actuator");

const app = express();

/**
 * @summary Test for {@see actuator}.
 */
function actuatorTest() {
    app.use(actuator());
    app.use(actuator({}));
    app.use(actuator({ basePath: '/management' }));
    app.use(actuator({ infoGitMode: 'simple' }));
    app.use(actuator({ infoGitMode: 'full' }));
}
