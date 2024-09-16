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
export type TakeScreenControlProps = typeof __propDef.props;
export type TakeScreenControlEvents = typeof __propDef.events;
export type TakeScreenControlSlots = typeof __propDef.slots;
export default class TakeScreenControl extends SvelteComponentTyped<TakeScreenControlProps, TakeScreenControlEvents, TakeScreenControlSlots> {
}
export {};
