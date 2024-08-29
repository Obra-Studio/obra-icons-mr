var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/plugma@0.0.39_@types+node@20.10.4_rollup@4.21.0/node_modules/plugma/frameworks/common/main/saveFigmaStyles.ts
function saveFigmaStyles() {
  if (true) {
    figma.ui.on("message", (msg) => __async(this, null, function* () {
      if (msg.event === "save-figma-stylesheet") {
        figma.clientStorage.setAsync("figma-stylesheet", msg.data);
      }
      if (msg.event === "get-figma-stylesheet") {
        let data = yield figma.clientStorage.getAsync("figma-stylesheet");
        figma.ui.postMessage({
          event: "pass-figma-stylesheet",
          data
        });
      }
      if (msg.event === "plugma-delete-file-storage") {
        let pluginDataKeys = figma.root.getPluginDataKeys();
        for (let i = 0; i < pluginDataKeys.length; i++) {
          let key = pluginDataKeys[i];
          figma.root.setPluginData(key, "");
          console.log(`Pugma: ${key} deleted from root pluginData`);
        }
        figma.notify("Root pluginData deleted");
      }
      if (msg.event === "plugma-delete-client-storage") {
        let clientStorageKeys = yield figma.clientStorage.keysAsync();
        for (let i = 0; i < clientStorageKeys.length; i++) {
          let key = clientStorageKeys[i];
          if (key !== "figma-stylesheet") {
            yield figma.clientStorage.deleteAsync(key);
            console.log(`Pugma: ${key} deleted from clientStorage`);
          }
        }
        figma.notify("ClientStorage deleted");
      }
      if (msg.event === "plugma-save-on-run-messages") {
        figma.clientStorage.setAsync("plugma-on-run-messages", msg.data);
      }
      if (msg.event === "plugma-get-on-run-messages") {
        let data = yield figma.clientStorage.getAsync("plugma-on-run-messages");
        for (let i = 0; i < data.length; i++) {
          let msg2 = data[i];
          figma.ui.postMessage(msg2.pluginMessage);
        }
      }
    }));
  }
}

// src/main.ts
function main_default() {
  figma.showUI(__html__, { width: 300, height: 400, themeColors: true });
  figma.ui.onmessage = (msg) => __async(this, null, function* () {
    if (msg.type === "paste-icon") {
      const iconName = msg.iconName;
      console.log(iconName);
      const svgString = msg.svgString;
      console.log(svgString);
      if (svgString) {
        const node = figma.createNodeFromSvg(svgString);
        node.name = iconName.slice(4);
        figma.currentPage.appendChild(node);
        figma.viewport.scrollAndZoomIntoView([node]);
        figma.notify(`Pasted ${iconName.slice(4)} icon`);
      } else {
        figma.notify(`Icon ${iconName} not found`, { error: true });
      }
    }
  });
}

// ../../../../../../private/var/folders/my/fzg_t78s6x3fvx3kqqpxl78m0000gn/T/temp_1724878474659.js
saveFigmaStyles();
main_default();
