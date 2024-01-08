
import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: 'hello',
  dangerouslyAllowBrowser: true,
});

export default openai;