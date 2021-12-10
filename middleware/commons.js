import nc from "next-connect";
import morgan from "morgan";

morgan.token("reqbody", (req) => {
  const bodyToLog = { ...req.body };
  if (bodyToLog.password) {
    bodyToLog.password = "...";
  }
  return JSON.stringify(bodyToLog, null, 2);
});

const logger = morgan(
  ":method :url \nreq.body: :reqbody \n:status - :response-time ms\n"
);

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
}).use(logger);

export default handler;
