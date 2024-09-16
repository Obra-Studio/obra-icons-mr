import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MoonFillProps = typeof __propDef.props;
export type MoonFillEvents = typeof __propDef.events;
export type MoonFillSlots = typeof __propDef.slots;
export default class MoonFill extends SvelteComponentTyped<MoonFillProps, MoonFillEvents, MoonFillSlots> {
}
export {};
