/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { testFilterCondition } from './filterUtilities';
/** @type {?} */
export const numberFilterCondition = (options) => {
    /** @type {?} */
    const cellValue = parseFloat(options.cellValue);
    /** @type {?} */
    let searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0]) || 0;
    if (typeof searchTerm === 'string') {
        searchTerm = parseFloat(searchTerm);
    }
    if (!searchTerm && (!options.operator || options.operator === '')) {
        return true;
    }
    return testFilterCondition(options.operator || '==', cellValue, searchTerm);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyRmlsdGVyQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zbGlja2dyaWQvIiwic291cmNlcyI6WyJhcHAvbW9kdWxlcy9hbmd1bGFyLXNsaWNrZ3JpZC9maWx0ZXItY29uZGl0aW9ucy9udW1iZXJGaWx0ZXJDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUV4RCxNQUFNLE9BQU8scUJBQXFCLEdBQW9CLENBQUMsT0FBOEIsRUFBRSxFQUFFOztVQUNqRixTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7O1FBQzNDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BGLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1FBQ2xDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDckM7SUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDakUsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJDb25kaXRpb24sIEZpbHRlckNvbmRpdGlvbk9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7IHRlc3RGaWx0ZXJDb25kaXRpb24gfSBmcm9tICcuL2ZpbHRlclV0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbnVtYmVyRmlsdGVyQ29uZGl0aW9uOiBGaWx0ZXJDb25kaXRpb24gPSAob3B0aW9uczogRmlsdGVyQ29uZGl0aW9uT3B0aW9uKSA9PiB7XHJcbiAgY29uc3QgY2VsbFZhbHVlID0gcGFyc2VGbG9hdChvcHRpb25zLmNlbGxWYWx1ZSk7XHJcbiAgbGV0IHNlYXJjaFRlcm0gPSAoQXJyYXkuaXNBcnJheShvcHRpb25zLnNlYXJjaFRlcm1zKSAmJiBvcHRpb25zLnNlYXJjaFRlcm1zWzBdKSB8fCAwO1xyXG4gIGlmICh0eXBlb2Ygc2VhcmNoVGVybSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHNlYXJjaFRlcm0gPSBwYXJzZUZsb2F0KHNlYXJjaFRlcm0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFzZWFyY2hUZXJtICYmICghb3B0aW9ucy5vcGVyYXRvciB8fCBvcHRpb25zLm9wZXJhdG9yID09PSAnJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gdGVzdEZpbHRlckNvbmRpdGlvbihvcHRpb25zLm9wZXJhdG9yIHx8ICc9PScsIGNlbGxWYWx1ZSwgc2VhcmNoVGVybSk7XHJcbn07XHJcbiJdfQ==