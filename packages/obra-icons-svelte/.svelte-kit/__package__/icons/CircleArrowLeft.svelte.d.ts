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
export type CircleArrowLeftProps = typeof __propDef.props;
export type CircleArrowLeftEvents = typeof __propDef.events;
export type CircleArrowLeftSlots = typeof __propDef.slots;
export default class CircleArrowLeft extends SvelteComponentTyped<CircleArrowLeftProps, CircleArrowLeftEvents, CircleArrowLeftSlots> {
}
export {};
