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
export type CloudDeployFillProps = typeof __propDef.props;
export type CloudDeployFillEvents = typeof __propDef.events;
export type CloudDeployFillSlots = typeof __propDef.slots;
export default class CloudDeployFill extends SvelteComponentTyped<CloudDeployFillProps, CloudDeployFillEvents, CloudDeployFillSlots> {
}
export {};
