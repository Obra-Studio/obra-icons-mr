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
export type RankingFillProps = typeof __propDef.props;
export type RankingFillEvents = typeof __propDef.events;
export type RankingFillSlots = typeof __propDef.slots;
export default class RankingFill extends SvelteComponentTyped<RankingFillProps, RankingFillEvents, RankingFillSlots> {
}
export {};
