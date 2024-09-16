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
export type EmployeeBadgeProps = typeof __propDef.props;
export type EmployeeBadgeEvents = typeof __propDef.events;
export type EmployeeBadgeSlots = typeof __propDef.slots;
export default class EmployeeBadge extends SvelteComponentTyped<EmployeeBadgeProps, EmployeeBadgeEvents, EmployeeBadgeSlots> {
}
export {};
