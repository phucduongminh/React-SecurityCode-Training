Mass assignment, also called overposting, autobinding or object injection, is a vulnerability that occurs when there is automatic binding of the HTTP parameters from a request onto a model/object, without any validation, leading to the exposure or altering of fields a user should not have access to.

The current application, BoatInsuranceApi, is an API that facilitates the handling of insurances and claims for boat owners. Open up the assignment folder and inspect the files. The ClaimController contains the create endpoint to provide the functionality to create a claim in case of a boating accident. The endpoint is vulnerable to mass assignment. This lab will teach how to prevent this vulnerability through creating a designated model (viewmodel or data transfer object (DTO)) responsible for handling the request data, which will then be converted (or mapped) to a database object.

### Create the DTO
The create endpoint in the ClaimController has one parameter: a Claim object containing the info submitted by the claimant. This object is then saved and the new claim added to the database. However, as Claim is a database entity, fields such as status, timeOfSettlement, and payout are exposed to being altered by the user, which we obviously don't want!

Task 1
Open the CreateClaimDto and create a public class with that name to be used as the DTO.

Need help? Show task
Task 2
In the newly created class, add the following fields:

private String description;
private String location;
private java.util.Date timeOfIncident;
And generate their getters and setters.

Keep in mind to always validate user input. The Claim entity contains basic validation on these fields. This lab will skim the validation part, as the focus lies on preventing mass assignment. However, make sure to add more in-depth validation when working on your own projects!
