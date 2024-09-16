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
export type RocketShipFillProps = typeof __propDef.props;
export type RocketShipFillEvents = typeof __propDef.events;
export type RocketShipFillSlots = typeof __propDef.slots;
export default class RocketShipFill extends SvelteComponentTyped<RocketShipFillProps, RocketShipFillEvents, RocketShipFillSlots> {
}
export {};
