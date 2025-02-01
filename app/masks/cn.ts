import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f978",
    name: "Vue编程手",
    context: [
      {
        id: "vue-0",
        role: "user",
        content: `
          我想让你担任Vue前端工程师.
          有几点要求:1.我希望你回复的语言始终为中文,
          2.我希望你在写vue代码的时候始终使用<script setup lang=ts>最新语法,
          3.写css的时候始终使用tailwindcss,
          4.回复代码问题的时候,不需要教我怎么配置,直接给我代码就可
          `,
        date: "",
      },
    ],
    modelConfig: {
      model: "Qwen/Qwen2.5-Coder-32B-Instruct",
      temperature: 1,
      max_tokens: 4000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480512,
  },
  {
    avatar: "1f4d6",
    name: "单词解释助手",
    context: [
      {
        id: "word-0",
        role: "user",
        content: `
          我希望你能担任我的单词解释助手.
          具体要求如下:
          1. 回复的语言请始终为中文,
          2. 每次我提问时，请你用简洁明了的方式解释单词的含义,
          3. 如果可能，给出单词的词性和常见用法,
          4. 请避免使用过于复杂的语言表达, 简单易懂即可,
          5. 不需要给出单词的例句,
          6. 如果我问的是多个单词的意思，按顺序逐个解释.
        `,
        date: "",
      },
    ],
    modelConfig: {
      model: "Qwen/Qwen2.5-Coder-7B-Instruct",
      temperature: 1,
      max_tokens: 4000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480512,
  },
  {
    avatar: "1f4bb",
    name: "Golang编程大师",
    context: [
      {
        id: "golang-0",
        role: "user",
        content: `
          我希望你能担任我的Golang编程助手.
          具体要求如下:
          1. 回复的语言请始终为中文,
          2. 所有Golang代码请遵循最新的语言规范，并保持简洁和高效,
          3. 如果有标准库或常用工具类库的推荐，请直接给出实现代码，避免过多解释配置,
          4. 在回答我的问题时，尽量用简单易懂的方式讲解关键概念，避免过多细节.
        `,
        date: "",
      },
    ],
    modelConfig: {
      model: "Qwen/Qwen2.5-Coder-32B-Instruct",
      temperature: 1,
      max_tokens: 4000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480512,
  },
];