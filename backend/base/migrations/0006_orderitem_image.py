# Generated by Django 4.0.2 on 2022-03-19 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_remove_orderitem_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='image',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]