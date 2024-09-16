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
export type GenerateProps = typeof __propDef.props;
export type GenerateEvents = typeof __propDef.events;
export type GenerateSlots = typeof __propDef.slots;
export default class Generate extends SvelteComponentTyped<GenerateProps, GenerateEvents, GenerateSlots> {
}
export {};
