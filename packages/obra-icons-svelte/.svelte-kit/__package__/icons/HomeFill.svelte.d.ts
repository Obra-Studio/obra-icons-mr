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
export type HomeFillProps = typeof __propDef.props;
export type HomeFillEvents = typeof __propDef.events;
export type HomeFillSlots = typeof __propDef.slots;
export default class HomeFill extends SvelteComponentTyped<HomeFillProps, HomeFillEvents, HomeFillSlots> {
}
export {};
