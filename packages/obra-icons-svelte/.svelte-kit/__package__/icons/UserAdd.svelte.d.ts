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
export type UserAddProps = typeof __propDef.props;
export type UserAddEvents = typeof __propDef.events;
export type UserAddSlots = typeof __propDef.slots;
export default class UserAdd extends SvelteComponentTyped<UserAddProps, UserAddEvents, UserAddSlots> {
}
export {};
