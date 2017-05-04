jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"TicketsManagement/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"TicketsManagement/test/integration/pages/App",
	"TicketsManagement/test/integration/pages/Browser",
	"TicketsManagement/test/integration/pages/Master",
	"TicketsManagement/test/integration/pages/Detail",
	"TicketsManagement/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "TicketsManagement.view."
	});

	sap.ui.require([
		"TicketsManagement/test/integration/NavigationJourneyPhone",
		"TicketsManagement/test/integration/NotFoundJourneyPhone",
		"TicketsManagement/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});