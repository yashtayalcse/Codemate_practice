import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

let myView = new EditorView({
    doc: "hello",
    extensions: [keymap.of(defaultKeymap)],
    parent: document.body
  })

export default function Editor(){
  return (
    <div className="p-2 border">
      myView
    </div>
  )
}