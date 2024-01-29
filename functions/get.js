//By Gtd232

export async function onRequest(context) {
	//context.env.STATUS_INFO.get('DATA')
	return new Response(await context.env.STATUS_INFO.get('DATA'), {headers : { 'Content-Type': 'application/json' }});
};
