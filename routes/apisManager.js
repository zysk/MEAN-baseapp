const router = require("express").Router();
const req = require("request");
const resCode = [200, 201];
const API_END_POINT = process.env.API_END_POINT;
const httpRes = (error, response, body, res) => {
  if (error && response) {
    return res.status(response["statusCode"]).send(error);
  } else if (response && !resCode.includes(response["statusCode"])) {
    return res.status(response["statusCode"]).send(body);
  } else {
    return res.send(body);
  }
};
const httpErrorRes = (error, response, res) => {
  if (condition) {
    return res.status(response["statusCode"]).send({
      status: "Error",
      status_code: response["statusCode"],
      message: "ERROR!!!",
      excp: error,
    });
  } else {
    return res.send(error);
  }
};

/* Save access token */
router.post("/auth/otp-verify", (req, res, next) => {
  try {
    return req(
      {
        url: `${API_END_POINT}${req["url"]}`,
        body: req["body"],
        method: "POST",
        json: true,
      },
      (error, response, body) => {
        if (error) {
          return res.status(response["statusCode"]).send(error);
        } else if (!_resCode.includes(response["statusCode"])) {
          return res.status(response["statusCode"]).send(body);
        } else {
          req["session"]["token"] = body["resBody"]["token"];
          return res.send(body);
        }
      }
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* Signout */
router.post("/auth/signout", (req, res, next) => {
  try {
    return req(
      {
        url: `${API_END_POINT}${req["url"]}`,
        body: req["body"],
        method: "POST",
        json: true,
        headers: { Authorization: `Bearer ${req["session"]["token"]}` },
      },
      (error, response, body) => {
        req["session"].destroy();
        return httpRes(error, response, body, res);
      }
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* POST requests */
router.post("/*", (req, res, next) => {
  try {
    const apis = ["admin/signin", "admin/resend-otp/"];
    const obj = {
      url: `${API_END_POINT}${req["url"]}`,
      body: req["body"],
      method: "POST",
      json: true,
    };
    if (!apis.includes(req["url"])) {
      obj["headers"] = { Authorization: `Bearer ${req["session"]["token"]}` };
    }
    return req(obj, (error, response, body) =>
      httpRes(error, response, body, res)
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* PATCH requests */
router.patch("/admin/delivery-media/*", (req, res, next) => {
  try {
    return req(
      {
        url: `${API_END_POINT}${req["url"]}`,
        form: req["body"],
        method: "PATCH",
        headers: { Authorization: `Bearer ${req["session"]["token"]}` },
      },
      (error, response, body) => httpRes(error, response, body, res)
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* PATCH requests */
router.patch("/*", (req, res, next) => {
  try {
    return req(
      {
        url: `${API_END_POINT}${req["url"]}`,
        body: req["body"],
        method: "PATCH",
        json: true,
        headers: { Authorization: `Bearer ${req["session"]["token"]}` },
      },
      (error, response, body) => httpRes(error, response, body, res)
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* DELETE requests */
router.delete("/*", (req, res, next) => {
  try {
    return req(
      {
        url: `${ API_END_POINT }${ req["url"] }`,
        body: req["body"],
        method: "DELETE",
        json: true,
        headers: { Authorization: `Bearer ${ req["session"]["token"] }` },
      },
      (error, response, body) => httpRes(error, response, body, res)
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* Login state */
router.get("/user", (req, res, next) => {
  try {
    const response = {};
    response["statusCode"] = 200;
    let body = {};
    body["userLoginStatus"] = req["session"]["token"] ? true : false;
    if (body["userLoginStatus"]) {
      body = {
        ...body,
        EP: process.env.END_POINT,
        TZ: process.env.TZ,
        ABE: process.env.AWS_BUCKET_ENDPOINT,
      };
    }
    return httpRes(false, response, body, res);
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

/* GET requests */
router.get("/*", (req, res, next) => {
  try {
    const obj = {
      url: `${API_END_POINT}${req["url"]}`,
      method: "GET",
      json: true,
      headers: { Authorization: `Bearer ${req["session"]["token"]}` },
    };
    return req(obj, (error, response, body) =>
      httpRes(error, response, body, res)
    );
  } catch (error) {
    return httpErrorRes(error, response, res);
  }
});

module.exports = router;
