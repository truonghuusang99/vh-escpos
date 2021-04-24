import { Injectable } from '@angular/core';
import { EscBuilder } from './encode/EscBuilder';
import * as i0 from "@angular/core";
export class VhEscposService {
    constructor() { }
    /**
     * Initialize a new print queue
     */
    init() {
        this.builder = new EscBuilder();
        this.builder.init();
        return this;
    }
    /**
     *
     * @param cutType full|partial
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param lineCount How many lines to feed
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param value left|center\right
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param value normal|large
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param text
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     *
     *
     */
    drawLine() {
        this.builder.drawLine();
        return this;
    }
    /**
     *
     * @param data
     */
    writeTable(data) {
        this.builder.writeTable(data);
        return this;
    }
    /**
     *
     * @param size
     */
    setPageSize(size = 48) {
        this.builder.setPageSize(size);
        return this;
    }
    writeCustomTable(data, options = {}) {
        this.builder.writeCustomTable(data, options);
        return this;
    }
    image(image) {
        this.builder.raster(image);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     */
    flush() {
        return this.builder.flush();
    }
}
VhEscposService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VhEscposService_Factory() { return new VhEscposService(); }, token: VhEscposService, providedIn: "root" });
VhEscposService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VhEscposService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmgtZXNjcG9zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi92aC1lc2Nwb3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFHakI7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksR0FBRyxDQUFDLFVBQWtCLE1BQU07UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSSxDQUFDLFlBQW9CLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQWlCLElBQUk7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQWlCLElBQUk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWlCLElBQUk7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsUUFBZ0IsTUFBTTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxRQUFnQixRQUFRO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxPQUFlLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQVM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLE9BQWUsRUFBRTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTLEVBQUUsVUFBZSxFQUFFO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUtEOztPQUVHO0lBQ0gsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O1lBeEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY0J1aWxkZXIgfSBmcm9tICcuL2VuY29kZS9Fc2NCdWlsZGVyJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi9lbmNvZGUvSW1hZ2UnXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWaEVzY3Bvc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHB1YmxpYyBidWlsZGVyOiBFc2NCdWlsZGVyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IHByaW50IHF1ZXVlXG4gICAqL1xuICBpbml0KCk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyID0gbmV3IEVzY0J1aWxkZXIoKTtcbiAgICB0aGlzLmJ1aWxkZXIuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjdXRUeXBlIGZ1bGx8cGFydGlhbFxuICAgKi9cbiAgcHVibGljIGN1dChjdXRUeXBlOiBzdHJpbmcgPSAnZnVsbCcpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5jdXQoY3V0VHlwZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGxpbmVDb3VudCBIb3cgbWFueSBsaW5lcyB0byBmZWVkXG4gICAqL1xuICBwdWJsaWMgZmVlZChsaW5lQ291bnQ6IG51bWJlciA9IDEpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5mZWVkKGxpbmVDb3VudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRJbnZlcnNlKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldEludmVyc2UodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Qm9sZCh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRCb2xkKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFVuZGVybGluZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRVbmRlcmxpbmUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBsZWZ0fGNlbnRlclxccmlnaHRcbiAgICovXG4gIHNldEp1c3RpZmljYXRpb24odmFsdWU6IHN0cmluZyA9ICdsZWZ0Jyk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldEp1c3RpZmljYXRpb24odmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBub3JtYWx8bGFyZ2VcbiAgICovXG4gIHNldFNpemUodmFsdWU6IHN0cmluZyA9ICdub3JtYWwnKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0U2l6ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRleHRcbiAgICovXG4gIHdyaXRlTGluZSh0ZXh0OiBzdHJpbmcgPSAnJyk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLndyaXRlTGluZSh0ZXh0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKi9cbiAgZHJhd0xpbmUoKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuZHJhd0xpbmUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHdyaXRlVGFibGUoZGF0YTogYW55KTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIud3JpdGVUYWJsZShkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNpemVcbiAgICovXG4gIHNldFBhZ2VTaXplKHNpemU6IG51bWJlciA9IDQ4KTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0UGFnZVNpemUoc2l6ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3cml0ZUN1c3RvbVRhYmxlKGRhdGE6IGFueSwgb3B0aW9uczogYW55ID0ge30pOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci53cml0ZUN1c3RvbVRhYmxlKGRhdGEsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1hZ2UoaW1hZ2U6IEltYWdlKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIucmFzdGVyKGltYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxuXG4gIC8qKlxuICAgKiB3cml0ZSB0aGUgY3VycmVudCBidWlsZGVyIHZhbHVlIHRvIHRoZSBkcml2ZXIgYW5kIGNsZWFyIG91dCB0aGUgYnVpbGRlclxuICAgKi9cbiAgZmx1c2goKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5mbHVzaCgpO1xuICB9XG59XG4iXX0=