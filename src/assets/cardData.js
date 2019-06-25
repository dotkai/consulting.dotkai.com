export default {
	types: {
		gigs: {
			story: {
				title: 'General Story or Narrative',
				code: 'story'
			}, 
			world: {
				title: 'World Building',
				code: 'world'
			}, 
			characters: {
				title: 'Character(s)',
				code: 'characters'
			}, 
			plot: {
				title: 'Plot',
				code: 'plot'
			}, 
			theme: {
				title: 'Theme(s)',
				code: 'theme'
			}
		},
		notes: `Don't know? Pick General Story/Narrative Consulting. Things can be changed, this just helps me know what to expect. :)`
	},
	deals: {
		gigs: {
			first: {
				title: '$5/10 min',
				name: 'First Time!',
				code: 'first',
				conditions: [
					'Up to 60 minutes (1 hour). Afterwards, standard rates apply.',
					'30+ minute reservations includes review/feedback of up to 2 pages text'
				]
			}, 
			standard: {
				title: '$10/10 min',
				name: 'Standard',
				code: 'standard',
				conditions: [
					'Schedule as much needed whenever needed',
					'Maximum session length: 2 hours',
					'30+ minutes reservations includes review/feedback of up to 2 pages text'
				]
			}, 
			student: {
				title: '$35/1 hour',
				name: 'Student Deal',
				code: 'student',
				conditions: [
					'Schedule as much needed whenever needed',
					'Maximum session length: 1 hour',
					'Includes review/feedback of up to 2 pages text per hour reserved'
				]
			}, 
			bulk: {
				title: '$200/4 hours',
				name: 'Bulk Package',
				code: 'bulk',
				conditions: [
					'16% OFF!',
					'Schedule as needed whenever needed',
					'Includes review/feedback of up to 2 pages text'
				]
			}
		},
		notes: `* Page length determined per Chicago style formatting or default Word standard or reasonable equivalent. It doesn't need to be exact. However, I will not accept documents that go to extreme lengths to jam in as much as possible (eg: shrinking text, putting questions in comments, etc.).`
	}
}