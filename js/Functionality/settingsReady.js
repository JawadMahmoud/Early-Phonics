function SettingsReady() {

    $("#speed_settings").hide();


    $('#scanningToggle').click(function () {
        $("#speed_settings").show();
    });

    $('#restrictedToggle').click(function () {
        $("#speed_settings").hide();
    });


};
