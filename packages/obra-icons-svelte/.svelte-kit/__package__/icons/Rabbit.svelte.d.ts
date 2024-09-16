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
export type RabbitProps = typeof __propDef.props;
export type RabbitEvents = typeof __propDef.events;
export type RabbitSlots = typeof __propDef.slots;
export default class Rabbit extends SvelteComponentTyped<RabbitProps, RabbitEvents, RabbitSlots> {
}
export {};
