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
export type CampfireProps = typeof __propDef.props;
export type CampfireEvents = typeof __propDef.events;
export type CampfireSlots = typeof __propDef.slots;
export default class Campfire extends SvelteComponentTyped<CampfireProps, CampfireEvents, CampfireSlots> {
}
export {};
