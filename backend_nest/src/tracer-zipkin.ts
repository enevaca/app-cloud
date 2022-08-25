'use strict'

import { BatchRecorder, ExplicitContext, jsonEncoder, Tracer } from "zipkin";
import { expressMiddleware } from "zipkin-instrumentation-express";
import { HttpLogger } from "zipkin-transport-http";

const ZIPKIN_ENDPOINT = process.env.ZIPKIN_ENDPOINT || "http://localhost:9411";

// Get ourselves a zipkin tracer
const tracer_zipkin = new Tracer({
  ctxImpl: new ExplicitContext(),
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: `${ZIPKIN_ENDPOINT}/api/v2/spans`,
      jsonEncoder: jsonEncoder.JSON_V2,
    }),
  }),
  localServiceName: "date-service",
});

export const zipk = () => expressMiddleware({ tracer: tracer_zipkin });
