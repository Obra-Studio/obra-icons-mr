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
export type AppsProps = typeof __propDef.props;
export type AppsEvents = typeof __propDef.events;
export type AppsSlots = typeof __propDef.slots;
export default class Apps extends SvelteComponentTyped<AppsProps, AppsEvents, AppsSlots> {
}
export {};
