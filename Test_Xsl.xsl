<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body>
		<h1 style="text-align:center">Employee Details</h1>
		<table border="3" align="center">
		<tr bgcolor="#9acd32">
		<th>Name</th>
		<th>Emp_Id</th>
		<th>Address</th>
		<th>Testing_cycle</th>
		</tr>
		<xsl:for-each select="Testing/Employee">
		<xsl:sort select="Name"></xsl:sort>
		<xsl:if test="Testing_cycle &gt; 1">
		<tr>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Emp_Id"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Address"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Testing_cycle"></xsl:value-of>
		</td>
		</tr>
		</xsl:if>
		</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>