jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TICKETSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"TicketsManagement/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"TicketsManagement/test/integration/pages/App",
	"TicketsManagement/test/integration/pages/Browser",
	"TicketsManagement/test/integration/pages/Master",
	"TicketsManagement/test/integration/pages/Detail",
	"TicketsManagement/test/integration/pages/Create",
	"TicketsManagement/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "TicketsManagement.view."
	});

	sap.ui.require([
		"TicketsManagement/test/integration/MasterJourney",
		"TicketsManagement/test/integration/NavigationJourney",
		"TicketsManagement/test/integration/NotFoundJourney",
		"TicketsManagement/test/integration/BusyJourney",
		"TicketsManagement/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});