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
export type UserCheckProps = typeof __propDef.props;
export type UserCheckEvents = typeof __propDef.events;
export type UserCheckSlots = typeof __propDef.slots;
export default class UserCheck extends SvelteComponentTyped<UserCheckProps, UserCheckEvents, UserCheckSlots> {
}
export {};
