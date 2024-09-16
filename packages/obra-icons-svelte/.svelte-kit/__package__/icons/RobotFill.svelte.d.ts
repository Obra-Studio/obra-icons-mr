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
export type RobotFillProps = typeof __propDef.props;
export type RobotFillEvents = typeof __propDef.events;
export type RobotFillSlots = typeof __propDef.slots;
export default class RobotFill extends SvelteComponentTyped<RobotFillProps, RobotFillEvents, RobotFillSlots> {
}
export {};
