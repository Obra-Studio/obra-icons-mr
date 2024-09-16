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
export type GdprProps = typeof __propDef.props;
export type GdprEvents = typeof __propDef.events;
export type GdprSlots = typeof __propDef.slots;
export default class Gdpr extends SvelteComponentTyped<GdprProps, GdprEvents, GdprSlots> {
}
export {};
