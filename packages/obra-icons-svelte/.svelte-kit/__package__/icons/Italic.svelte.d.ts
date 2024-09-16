import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ItalicProps = typeof __propDef.props;
export type ItalicEvents = typeof __propDef.events;
export type ItalicSlots = typeof __propDef.slots;
export default class Italic extends SvelteComponentTyped<ItalicProps, ItalicEvents, ItalicSlots> {
}
export {};
