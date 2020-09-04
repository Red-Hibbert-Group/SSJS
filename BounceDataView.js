<script runat="server">
Platform.Load("core","1.1");
var deObj = {
    "CustomerKey" : "BouceDataView03",
    "Name" : "BouceDataView03",
    "Fields" : [
      { "Name" : "AccountID", "FieldType" : "Number", "Ordinal" : 2 },
      { "Name" : "OYBAccountID", "FieldType" : "Number", "IsPrimaryKey" : false, "IsRequired" : false},
      { "Name" : "JobID", "FieldType" : "Number", "Ordinal" : 2 },
      { "Name" : "ListID", "FieldType" : "Number", "Ordinal" : 2 },
      { "Name" : "BatchID", "FieldType" : "Number", "Ordinal" : 2 },
      { "Name" : "SubscriberID", "FieldType" :"Number", "Ordinal" : 2 },
      { "Name" : "SubscriberKey", "FieldType" :"Text", "MaxLength" : 254, "IsPrimaryKey" : true, "IsRequired" : true },
      { "Name" : "EventDate", "FieldType" : "Date", "Ordinal" : 2 },
      { "Name" : "IsUnique", "FieldType" : "Boolean", "IsRequired" : false},
      { "Name" : "Domain", "FieldType" : "Text", "MaxLength" : 128 },
      { "Name" : "BounceCategoryID", "FieldType" : "Number", "Ordinal" : 2 },
      { "Name" : "BounceCategory", "FieldType" : "Text","MaxLength" : 50 , "IsRequired" : false},
      { "Name" : "BounceSubcategoryID", "FieldType" : "Number", "IsRequired" : false},
      { "Name" : "BounceSubcategory", "FieldType" : "Text","MaxLength" : 50 , "IsRequired" : false},
      { "Name" : "BounceTypeID", "FieldType" : "Number", "Ordinal" : 2},
      { "Name" : "BounceType", "FieldType" : "Text", "MaxLength" : 50 , "IsRequired" : false},
      { "Name" : "SMTPBounceReason", "FieldType" : "Text", "IsRequired" : false},
      { "Name" : "SMTPMessage", "FieldType" : "Text", "IsRequired" : false},
      { "Name" : "SMTPCode", "FieldType" : "Number", "IsRequired" : false},
      { "Name" : "TriggererSendDefinitionObjectID", "FieldType" : "Text", "MaxLength" : 36, "IsRequired" : false},
      { "Name" : "TriggeredSendCustomerKey", "FieldType" : "Text", "IsRequired" : false}
    ]
 };
var myDE = DataExtension.Add(deObj);
</script>
