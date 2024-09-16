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
export type LifebuoyProps = typeof __propDef.props;
export type LifebuoyEvents = typeof __propDef.events;
export type LifebuoySlots = typeof __propDef.slots;
export default class Lifebuoy extends SvelteComponentTyped<LifebuoyProps, LifebuoyEvents, LifebuoySlots> {
}
export {};
