self.addEventListener('install',	function(event)	{
		console.log('abdulmughni aldiansyah');
	self.skip waiting();
	});


//iam new coworker
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});

self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});