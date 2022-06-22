/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		// Uncomment to use MMM-SalesCounter module
		// {
		// 	module: "MMM-SalesCounter",
		// 	header: "JSJ Crochets Sales",
		// 	position: "top_right",
		// 	config: {}
		// },
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Fairfax, VA",
				locationID: "4758023", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "7690b40feca2587ef44e101175c09396"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Fairfax, VA",
				locationID: "4758023", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "7690b40feca2587ef44e101175c09396"
			}
		},
		{
			module: "compliments",
			position: "top_left",
			config: {
				compliments:{
					"....-03-10": [
						"Happy Anniversary Baby!"
					],
					morning: [
						"Good morning, Jamea!",
						"Enjoy your day!",
						"Grab some coffee!",
						"How was your sleep?"
					],
					afternoon: [
						"Good afternoon, Jamea",
						"Your day going alright?"
					],
					evening: [
						"Good evening, Jamea",
						"Good night!"
					],
					"....-01-01": [
						"Happy New Year!"
					],
					"...-12-25": [
						"Merry Christmas!"
					],
					"....-08-20": [
						"Happy Birthday, Jamea!"
					]
				}			
			}
		},
		{
			module: 'MMM-Worldclock',
			position: 'top_left', // This can be any of the regions, best in top_left or top_right regions
			config: {
				// See 'Configuration options' for more information.
				timeFormat: 'hh:mm A', //Global time format, as defined in moment.js format()
				style: 'top', // Which way do you want the flag and description from the clock? choices are 'top', 'left','right','bottom'
				offsetTimezone: null, // Timezone you want to show the difference from. null, "", or omitted from config will be UTC.
				clocks: [
					{
						title: "Seattle", // Too long of a title could cause bad text align.
						timezone: "America/Los_Angeles", //When omitted, Local time will be displayed. 
						timeFormat: "HH:mm:ss.SSS A", // Time format override.
						flag: "us", // If you'd like a flag from the standard library 
					},
					{
						title: "New York", // Too long of a title could cause bad text align.
						timezone: "America/New_York", //When omitted, Local time will be displayed. 
						timeFormat: "HH:mm:ss.SSS A", // Time format override.
						flag: "us", // If you'd like a flag from the standard library 
					},
					{
						title: "UTC",
						timezone: "UTC",
						timeFormat: "HH:mm:ss.SSS A", // Time format override. 
						altflag: "world.png" // if you'd like a flag from a file on your mirror device. 
					},
					{
						title: "London",
						timezone: "Europe/London",
						timeFormat: "HH:mm:ss.SSS A", // Time format override.
						flag: "gb"
					},
					{
						title: "Hong Kong",
						timezone: "Asia/Hong_Kong",
						timeFormat: "HH:mm:ss.SSS A", // Time format override.
						flag: "hk"
					},
				]
			},
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
