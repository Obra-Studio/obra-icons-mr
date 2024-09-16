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
export type SubwayProps = typeof __propDef.props;
export type SubwayEvents = typeof __propDef.events;
export type SubwaySlots = typeof __propDef.slots;
export default class Subway extends SvelteComponentTyped<SubwayProps, SubwayEvents, SubwaySlots> {
}
export {};
