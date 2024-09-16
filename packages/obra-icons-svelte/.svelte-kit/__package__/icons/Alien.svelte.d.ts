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
export type AlienProps = typeof __propDef.props;
export type AlienEvents = typeof __propDef.events;
export type AlienSlots = typeof __propDef.slots;
export default class Alien extends SvelteComponentTyped<AlienProps, AlienEvents, AlienSlots> {
}
export {};
