$('#file').change(function (e) {
	$("form").data({files: e.target.files});
});

$("form").submit(function (e) {
	var files = $("form").data().files;

	var data = new FormData();
	$.each(files, function (key, value) {
		data.append(key, value);
	});

	$.ajax({
		url: '/api/fileanalyse/',
		type: 'POST',
		data: data,
		cache: false,
		processData: false,
		contentType: false,
		error: function (jXhr, status) {
			alert('error: ' + status);
		},
		success: function (data) {
			console.log(data);
			$("#meta").append('file size: ' + data.size);
		}
	});

	e.preventDefault();
	return false;
});