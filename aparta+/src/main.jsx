import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "+/index.css";
import "+/static/fonts/poppins.scss";
import App from "@/app/App.jsx";
import * as echarts from "echarts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const uploadLink = createUploadLink({
  uri: "http://localhost:5095/graphql/",
  headers: {
    'Apollo-Require-Preflight': 'true',
    'GraphQL-preflight': 1
  },
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

echarts.registerTheme(
  "aparta-plus",
  JSON.parse(`
  {
      "color": [
          "#daf3fb",
          "#094152",
          "#d4e972",
          "#ffde5a",
          "#d9d3d6"
      ],
      "backgroundColor": "rgba(0,0,0,0)",
      "textStyle": {},
      "title": {
          "textStyle": {
              "color": "#666666"
          },
          "subtextStyle": {
              "color": "#999999"
          }
      },
      "line": {
          "itemStyle": {
              "borderWidth": "2"
          },
          "lineStyle": {
              "width": "3"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": true
      },
      "radar": {
          "itemStyle": {
              "borderWidth": "2"
          },
          "lineStyle": {
              "width": "3"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": true
      },
      "bar": {
          "itemStyle": {
              "barBorderWidth": 0,
              "barBorderColor": "#ccc",
              "borderRadius": [10, 10, 10, 10]
          },
          "emphasis": {
              "itemStyle": {
                "color": "#094152"
              }
          }
      },
      "pie": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "scatter": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "boxplot": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "parallel": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "sankey": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "funnel": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "gauge": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "candlestick": {
          "itemStyle": {
              "color": "#d0648a",
              "color0": "transparent",
              "borderColor": "#d0648a",
              "borderColor0": "#22c3aa",
              "borderWidth": "1"
          }
      },
      "graph": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          },
          "lineStyle": {
              "width": "1",
              "color": "#cccccc"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": true,
          "color": [
              "#daf3fb",
              "#094152",
              "#d4e972",
              "#ffde5a",
              "#d9d3d6"
          ],
          "label": {
              "color": "#ffffff"
          }
      },
      "map": {
          "itemStyle": {
              "areaColor": "#eeeeee",
              "borderColor": "#999999",
              "borderWidth": 0.5
          },
          "label": {
              "color": "#28544e"
          },
          "emphasis": {
              "itemStyle": {
                  "areaColor": "rgba(34,195,170,0.25)",
                  "borderColor": "#22c3aa",
                  "borderWidth": 1
              },
              "label": {
                  "color": "#349e8e"
              }
          }
      },
      "geo": {
          "itemStyle": {
              "areaColor": "#eeeeee",
              "borderColor": "#999999",
              "borderWidth": 0.5
          },
          "label": {
              "color": "#28544e"
          },
          "emphasis": {
              "itemStyle": {
                  "areaColor": "rgba(34,195,170,0.25)",
                  "borderColor": "#22c3aa",
                  "borderWidth": 1
              },
              "label": {
                  "color": "#349e8e"
              }
          }
      },
      "categoryAxis": {
          "axisLine": {
              "show": false,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": false,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "valueAxis": {
          "axisLine": {
              "show": false,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": false,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "logAxis": {
          "axisLine": {
              "show": false,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": false,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "timeAxis": {
          "axisLine": {
              "show": false,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": false,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "toolbox": {
          "iconStyle": {
              "borderColor": "#999999"
          },
          "emphasis": {
              "iconStyle": {
                  "borderColor": "#666666"
              }
          }
      },
      "legend": {
          "textStyle": {
              "color": "#999999"
          }
      },
      "tooltip": {
          "axisPointer": {
              "lineStyle": {
                  "color": "#cccccc",
                  "width": 1
              },
              "crossStyle": {
                  "color": "#cccccc",
                  "width": 1
              }
          }
      },
      "timeline": {
          "lineStyle": {
              "color": "#4ea397",
              "width": 1
          },
          "itemStyle": {
              "color": "#4ea397",
              "borderWidth": 1
          },
          "controlStyle": {
              "color": "#4ea397",
              "borderColor": "#4ea397",
              "borderWidth": 0.5
          },
          "checkpointStyle": {
              "color": "#4ea397",
              "borderColor": "#3cebd2"
          },
          "label": {
              "color": "#4ea397"
          },
          "emphasis": {
              "itemStyle": {
                  "color": "#4ea397"
              },
              "controlStyle": {
                  "color": "#4ea397",
                  "borderColor": "#4ea397",
                  "borderWidth": 0.5
              },
              "label": {
                  "color": "#4ea397"
              }
          }
      },
      "visualMap": {
          "color": [
              "#d0648a",
              "#22c3aa",
              "#adfff1"
          ]
      },
      "dataZoom": {
          "backgroundColor": "rgba(255,255,255,0)",
          "dataBackgroundColor": "rgba(222,222,222,1)",
          "fillerColor": "rgba(114,230,212,0.25)",
          "handleColor": "#cccccc",
          "handleSize": "100%",
          "textStyle": {
              "color": "#999999"
          }
      },
      "markPoint": {
          "label": {
              "color": "#ffffff"
          },
          "emphasis": {
              "label": {
                  "color": "#ffffff"
              }
          }
      }
  }
  `)
);

createRoot(document.getElementById("root")).render(

    //!(Important) Remove "StrictMode" after development

  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
