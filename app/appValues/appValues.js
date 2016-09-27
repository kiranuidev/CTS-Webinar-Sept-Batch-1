angular.module("appValues", []);

angular.module("appValues")
    .value("APP_VALUES", {
        "appName": "Vehicle Dealers",
        "Version": "1.0.0",
        "baseUrl": "app/api/",
        "baseImageUrl": "app/images",
        "baseTemplatePath": "app/templates/",
        "ErrorMessage": "Something Went Wrong. Please try later",
    });
